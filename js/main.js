// 高亮当前导航链接
const navLinks = document.querySelectorAll('.nav-links a');
const current = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href') === current) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// 启用平滑滚动的导航高亮（锚点滚动不再隐藏区块）
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // 平滑滚动
    document.documentElement.style.scrollBehavior = 'smooth';

    // 点击后根据href/hash滚动，不再阻止默认行为
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 根据href自动滚动，无需额外JS
            // 同时更新高亮
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 根据滚动位置更新导航高亮（可选）
    const sections = Array.from(document.querySelectorAll('.page'));
    function updateActiveLink() {
        const scrollPos = window.scrollY + 80; // 预留导航高度
        let currentId = sections[0]?.id;
        for (const sec of sections) {
            const rect = sec.getBoundingClientRect();
            const top = window.scrollY + rect.top;
            if (top <= scrollPos) currentId = sec.id;
        }
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('data-page') === currentId));
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}); 