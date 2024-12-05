import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Feature = () => {
    return (
        <div className='feature-main'>
            <div className="feature-section">
                <div className="feature-flex">
                    <div className="feature-title">
                        <h1>Onze leads staan klaar om een offerte te ontvangen</h1>
                        <p>De Lead Centrale heeft een exclusieve partnership met Solkunder, de meest gerenommeerde leadgenerator voor zonnepanelen installaties in Europa. Door hun uitgebreide ervaring weten zij wat belangrijk is voor de installateur en kunnen we daarmee de hoogste kwaliteit leads leveren. Onze hoogstaande kwaliteit komt door de unieke strategische aanpak. We genereren, valideren en leveren hoogwaardige leads van huiseigenaren voor zonnepanelen (en andere energie-producten) door heel Nederland.</p>
                    </div>


                    <div className="feature-flex-content">
                        <div className="feature-main-div">
                            <div className="feature-head">
                                <h1>Wat kun je verwachten van De Lead Centrale:</h1>
                            </div>
                            <div className="feature-content">
                                <div className="feature-h1">
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Gratis registratie</p>
                                    </div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Geen abonnement en geen minimum afname</p>
                                    </div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Pauzeren en activeren op elk gewenste moment</p>
                                    </div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Eenvoudig wijzigen van het postcode zoekgebied</p>
                                    </div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Dagelijks nieuwe leads</p>
                                    </div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Gespecialiceerd in leads van zonne-energie,<br /> opslag, vervanging en uitbreiding van zonne-<br />installaties</p>
                                    </div>
                                </div>
                                <div className="feature-h1">
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Keuze om dagelijks leads te ontvangen of om via het<br /> platform te kopen</p></div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Goede en eerlijke garantie</p></div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Actuele leads direct per mail ontvangen</p></div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Persoonlijke helpdesk service</p></div>
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>API integratie met je CRM systeem</p></div>
                                </div>
                            </div>
                        </div>


                        <div className="feature-main-div">
                            <div className="feature-head">
                                <h1>De lead informatie die je van ons krijgt:</h1>
                            </div>
                            <div className="feature-content">
                                <div className="feature-h1">
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Naam van de huiseigenaren</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Telefoonnummer</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>E-mailadres</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Adresgegevens</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Foto van de woning</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Type dak</p>
                                    </div>
                                </div>
                                <div className="feature-h1">
                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Hellingshoek dak</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Afmeting dak</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Richting van het dak</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Eigendomsstatus</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Energieverbruik</p>
                                    </div>

                                    <div className="feature-points">
                                        <FaCheckCircle className="check-feature" />
                                        <p>Bedrijfsgegevens</p>
                                    </div>
                                </div>
                                <div className="feature-h1">
                                    <p>Je ontvangt van ons de informatie die je nodig <br />hebt voor een juiste voorbereiding en een succesvolle verkoop</p>
                                    <img src='./imge/feature.png' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
