
export default function MainPage({ contant, isAdmin, handleChange }) {
    const handleMouseMove = (e) => {
        for (const card of document.getElementsByClassName('card')) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };
    return (
        <div className="main-page">
            <div className="title">
                <div className="header">
                    <span className="big-text">ПУТЕШЕСТВИЕ</span>
                    <span className="small-text">на красную планету</span>
                </div>
                <span className="button start-btn">Начать путешествие</span>
            </div>
            {!isAdmin ?
                <div id="cards" onMouseMove={handleMouseMove}>
                    {contant.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card-content">
                                <span className="normal-text">{card.top}</span>
                                <span className="big-text">{card.middle}</span>
                                <span className="normal-text">{card.bottom}</span>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div id="cards">
                    {contant.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card-content dev">
                                <input
                                    value={card.top}
                                    onChange={(e) => handleChange(e, index, 'top')}
                                />
                                <input
                                    value={card.middle}
                                    onChange={(e) => handleChange(e, index, 'middle')}
                                />
                                <input
                                    value={card.bottom}
                                    onChange={(e) => handleChange(e, index, 'bottom')}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}