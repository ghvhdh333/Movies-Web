export default function Footer() {
    return (
    <footer className="container">
        Woojoo. All rights reserved.
            
        <style jsx>{`
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100px;

                border-top: 1px solid #ccc;
                font-weight : 600;
                color: #888;
            }
        `}</style>
    </footer>
    )
}