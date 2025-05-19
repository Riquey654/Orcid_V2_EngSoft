import React from 'react';

import "./Footer.css";

const Footer = () => {

    return(
    <div>

        <footer className="footer">

            <div class="footer-content">

                <div>
                    <h2>OrcidV2</h2>
                </div>

                <div class="footer-section">
                    <h3>Contato</h3>
                    <p>Telefone 1 - (11) 98765-4321</p>
                    <p>Telefone 2 - (21) 99876-5432</p>
                    <p>Email - orcid.v2@email.com</p>
                </div>

            </div>

            <div class="footer-bottom">
                <p>&copy; 2025. All Rights Reserved.</p>
            </div>

        </footer>
    </div>
    )
}

export default Footer;