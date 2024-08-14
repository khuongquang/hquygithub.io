document.addEventListener("DOMContentLoaded", function() {
    // Log message to console
    console.log("Trang đã sẵn sàng!");

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    });
});
