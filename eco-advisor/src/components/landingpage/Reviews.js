import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

export default function Reviews() {
    const reviews = [
        {
            name: "Alice Johnson",
            image: "https://img.freepik.com/free-photo/portrait-beautiful-woman_144627-23207.jpg?t=st=1731165410~exp=1731169010~hmac=a0d05742f0c0be62cf9c17405492653cc4d599230ed1848ee95c6c9ebb5daf35&w=996",
            text: "Great service and eco-friendly products!"
        },
        {
            name: "Bob Smith",
            image: "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-17189.jpg?t=st=1731165509~exp=1731169109~hmac=b11df8effe1ec1853c76e9ce1a9c6664288111b12787c6c8c2163f6fdf901611&w=900",
            text: "I love the sustainable approach!"
        },
        {
            name: "Mangesh Sharma",
            image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?t=st=1731165693~exp=1731169293~hmac=d1af5a38bbdb53a8d07b528b420ec170da106892a4c8df45b7a7689fc914d814&w=2000",
            text: "Highly recommend to everyone!"
        },
        {
            name: "Diana Prince",
            image: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg?t=st=1731165458~exp=1731169058~hmac=1658fb97cf4367df4dc123ba1b727141405a2d053d7ca2c5b2048e6442ed2576&w=900",
            text: "Fantastic quality and service!"
        },
        {
            name: "Raj Tiwari",
            image: "https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg?t=st=1731165670~exp=1731169270~hmac=22c2d6c8b07c122702b6cb17eab88087c58aaec645c580171b064cd841a000e7&w=900",
            text: "A must-try for eco-conscious consumers!"
        },
        {
            name: "Fiona Gallagher",
            image: "https://img.freepik.com/free-photo/brunette-woman-with-red-lipstick-black-dress_144627-19236.jpg?t=st=1731165592~exp=1731169192~hmac=ed60b27988e4bdd1c59e058f47336b2cd6ecbf46dbb3ac5118267173b8004339&w=900",
            text: "Impressed with the product range!"
        }
    ];

    return (
        <Marquee fade={true}>
            {reviews.map((review, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
                    <img src={review.image} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                    <div>
                        <strong>{review.name}</strong>
                        <p>{review.text}</p>
                    </div>
                </div>
            ))}
        </Marquee>
    );
}