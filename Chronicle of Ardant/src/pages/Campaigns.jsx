import React from 'react';
import { CampaignSection } from '../components/CampaignSection.jsx';
import { campaignsData } from '../data/campaignsData';

export const Campaigns = () => {
  return (
    <>
      <header>
        <h1 style={{textAlign: 'center', color: '#00ffcc', fontFamily: "'Cormorant Garamond', serif", margin: '1rem 0'}}>
          Кампании
        </h1>
        <p>Связанные между собой игровые кампании, сюжет которых происходит во вселенной Арданта.</p>
      </header>

      {campaignsData.map((campaign, index) => (
        <CampaignSection 
          key={campaign.id} 
          campaign={campaign} 
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
};

