from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
import time

def setup_driver():
    """Set up Chrome driver with appropriate options"""
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    
    driver = webdriver.Chrome(options=chrome_options)
    return driver

def clean_content(content):
    """Clean and deduplicate content"""
    # Remove duplicates while maintaining order
    seen = set()
    cleaned_content = []
    for item in content:
        item_text = item["text"]
        if item_text not in seen:
            seen.add(item_text)
            cleaned_content.append(item)
    
    return cleaned_content

def create_pdf(content, filename='blog_content.pdf'):
    """Create a PDF file with the scraped content"""
    doc = SimpleDocTemplate(filename, pagesize=letter)
    styles = getSampleStyleSheet()
    
    # Create custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=16,
        spaceAfter=20
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=12,
        leading=14,
        spaceAfter=12,
        spaceBefore=12
    )
    
    # Build PDF content
    pdf_content = []
    
    # Add title
    pdf_content.append(Paragraph("Blog Content", title_style))
    pdf_content.append(Spacer(1, 20))
    
    # Add paragraphs
    for item in content:
        text = item["text"]
        pdf_content.append(Paragraph(text, body_style))
    
    # Generate PDF
    doc.build(pdf_content)
    print(f"PDF created successfully: {filename}")
    return filename

def scrape_blog_content(url):
    """Scrape all paragraph content from the page"""
    driver = setup_driver()
    try:
        driver.get(url)
        time.sleep(5)  # Give the page time to load
        content = []
        
        try:
            # Find all paragraph elements
            paragraphs = WebDriverWait(driver, 10).until(
                EC.presence_of_all_elements_located((By.TAG_NAME, "p"))
            )
            
            # Extract text from each paragraph
            for p in paragraphs:
                text = p.text.strip()
                if text:  # Only add non-empty paragraphs
                    content.append({
                        "text": text,
                        "type": "paragraph"
                    })
                    
        except Exception as e:
            print(f"Error finding paragraphs: {str(e)}")
        
        return content
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return []
        
    finally:
        driver.quit()

def main():
    url = "https://litextension.com/blog/eco-friendly-products-examples/"
    
    # Scrape content
    print("Scraping content...")
    raw_content = scrape_blog_content(url)
    
    # Clean content
    print("\nCleaning content...")
    cleaned_content = clean_content(raw_content)
    
    # Create PDF
    pdf_filename = 'eco_friendly_products.pdf'
    create_pdf(cleaned_content, pdf_filename)
    
    # Print preview of content
    print("\nCleaned Content Preview:")
    for idx, text in enumerate(cleaned_content, 1):
        print(f"\n--- Section {idx} ---")
        print(text)

if __name__ == "__main__":
    main()