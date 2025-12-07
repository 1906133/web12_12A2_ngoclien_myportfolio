document.addEventListener('DOMContentLoaded', () => {
    const moonIcon = document.getElementById('moon-icon');

    moonIcon.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const moreBtn = document.getElementById("moreBtn");
    const moreMenu = document.getElementById("moreMenu");

    moreBtn.addEventListener("click", (event) => {
        event.preventDefault();
        moreMenu.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
        if (!moreBtn.contains(event.target) && !moreMenu.contains(event.target)) {
            moreMenu.classList.remove("show");
        }
    });
});

// NOTI
document.addEventListener('DOMContentLoaded', function() {
    // Lấy form từ DOM
    const form = document.getElementById('contactForm');

    // Xử lý khi form được gửi
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngừng hành động mặc định của form (tránh reload trang)

        // Hiển thị thông báo alert
        alert('Cảm ơn bạn đã liên hệ với tôi! Tôi sẽ trả lời sớm nhất có thể.');

        // Reset form sau khi gửi (tùy chọn)
        form.reset();
    });
});

