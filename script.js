<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Webpage with Background Pattern</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(45deg, #d32f2f, #ff1744); /* Gradient สวยๆ */
            background-size: 400% 400%;
            animation: gradientAnimation 5s ease infinite;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            overflow: hidden;
            position: relative;
        }

        @keyframes gradientAnimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .pattern {
            background-image: url('https://www.transparenttextures.com/patterns/black-tie.png'); /* ลายจากลิงก์หรือรูปภาพ */
            background-size: 200px 200px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* ทำให้ไม่ขัดแย้งกับการคลิก */
        }

        h1 {
            font-size: 3rem;
            color: white;
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeIn 2s forwards;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .image-container {
            width: 80%;
            max-width: 600px;
            margin-bottom: 20px;
            transition: transform 0.5s ease;
        }

        .image-container img {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-container:hover {
            transform: scale(1.1);
        }

        button {
            background-color: #d32f2f;
            color: white;
            padding: 15px 30px;
            font-size: 1.2rem;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        button:hover {
            background-color: #b71c1c;
            transform: scale(1.1);
        }

        .message {
            font-size: 1.5rem;
            margin-top: 20px;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }

        .show-message {
            opacity: 1;
        }
    </style>
</head>
<body>

    <h1>Welcome to the Interactive Webpage</h1>
    
    <div class="image-container">
        <img src="https://via.placeholder.com/600x400" alt="Sample Image">
    </div>
    
    <button id="revealMessageBtn">Click Me</button>
    
    <p id="message" class="message">You clicked the button! Here's the cool message!</p>

    <div class="pattern"></div> <!-- ลายพื้นหลัง -->

    <script>
        // เริ่มต้นด้วยการเพิ่มลูกเล่นให้ปุ่มและข้อความ
        const button = document.getElementById("revealMessageBtn");
        const message = document.getElementById("message");

        button.addEventListener("click", () => {
            message.classList.add("show-message"); // แสดงข้อความ
        });

        // การเคลื่อนไหวของภาพเมื่อมีการโฮเวอร์
        const imageContainer = document.querySelector(".image-container");
        imageContainer.addEventListener("mouseenter", () => {
            imageContainer.style.transform = "scale(1.1)"; // ขยายขนาดเมื่อเอาเมาส์ไปทับ
        });
        imageContainer.addEventListener("mouseleave", () => {
            imageContainer.style.transform = "scale(1)"; // คืนขนาดเดิมเมื่อเมาส์ออก
        });

        // การเพิ่มการเลื่อนเคลื่อนไหวให้ปุ่มเมื่อคลิก
        button.addEventListener("click", () => {
            button.style.transform = "scale(1.2)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 200); // คืนสภาพของปุ่ม
        });
    </script>

</body>
</html>
