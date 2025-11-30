document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Phanupan's Profile");

    // ---------------------------------------------------------
    // 1. ฟังก์ชันทำให้เนื้อหาค่อยๆ ลอยขึ้นมาทีละชิ้น (Staggered Animation)
    // ---------------------------------------------------------
    const elementsToAnimate = document.querySelectorAll('.profile-header, .info-card, .link-btn, footer');
    
    elementsToAnimate.forEach((el, index) => {
        // ตั้งค่าเริ่มต้น: ซ่อนไว้และเลื่อนลงต่ำเล็กน้อย
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        
        // ค่อยๆ สั่งให้แสดงผลทีละชิ้น (ดีเลย์ตามลำดับ)
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100 + 150); // ดีเลย์เพิ่มขึ้นทีละ 100ms
    });

    // ---------------------------------------------------------
    // 2. ฟังก์ชันเอฟเฟกต์รูปภาพ 3D เมื่อเอาเมาส์ไปชี้
    // ---------------------------------------------------------
    const profileImg = document.querySelector('.img-container img');
    
    if (profileImg) {
        document.addEventListener('mousemove', (e) => {
            // คำนวณตำแหน่งเมาส์เทียบกับหน้าจอ
            const x = (window.innerWidth / 2 - e.pageX) / 20;
            const y = (window.innerHeight / 2 - e.pageY) / 20;

            // หมุนรูปภาพเบาๆ ตามเมาส์
            profileImg.style.transform = `scale(1.05) rotateY(${x}deg) rotateX(${y}deg)`;
        });

        // เมื่อเมาส์ออกจากหน้าต่าง ให้รูปกลับมาตรงเหมือนเดิม
        document.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotateY(0) rotateX(0)';
        });
    }


