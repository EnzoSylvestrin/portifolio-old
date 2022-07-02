import './footer.css';

export default function Footer() {
    return (
        <footer class="page-footer" id="footer">
            <div class="social">   
                <a href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-linkedin" id="icon-linkedin"></i></a>
                <a href="https://github.com/EnzoSylvestrin" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github" id="icon-github"></i></a>
                <a href="https://twitter.com/Iluminights" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-twitter" id="icon-twitter"></i></a>
            </div>
            <div class="copyright">
                <p>Enzo Sylvestrin 2022 ©</p>
            </div>
        </footer>
    );
}