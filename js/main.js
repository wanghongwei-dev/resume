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

// 单页面应用页面切换功能
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // 页面切换函数
    function showPage(pageId) {
        // 隐藏所有页面
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // 显示目标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // 更新导航栏高亮
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // 滚动到页面顶部
        window.scrollTo(0, 0);
    }

    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            
            // 更新URL hash
            window.location.hash = '#' + pageId;
        });
    });

    // 页面加载时根据URL hash显示对应页面
    function handleHashChange() {
        const hash = window.location.hash.slice(1) || 'home';
        showPage(hash);
    }

    // 监听hash变化
    window.addEventListener('hashchange', handleHashChange);
    
    // 页面加载时初始化
    handleHashChange();
}); 