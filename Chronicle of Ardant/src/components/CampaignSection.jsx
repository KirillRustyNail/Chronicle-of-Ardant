export const CampaignSection = ({ campaign, reverse = false }) => {
  return (
    <section className="campaign-section">
      <div 
        className="campaign-card"
        style={{ backgroundImage: `url(${campaign.backgroundImage || ''})` }}
      >
        <div className="campaign-content-container">
          <div className={`campaign-content ${reverse ? 'reverse' : ''}`}>
            <div className="campaign-text-container">
              <div className="campaign-text">
                <h2>{campaign.title}</h2>
                <p>{campaign.description}</p>
              </div>
            </div>
            <div className="campaign-image-container">
              <img src={campaign.logo || ''} alt={campaign.title} className="campaign-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};