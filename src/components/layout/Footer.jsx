function Footer() {
    const FooterYear= new Date().getFullYear();
    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>

                <p> Copyright &copy; {FooterYear} All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
