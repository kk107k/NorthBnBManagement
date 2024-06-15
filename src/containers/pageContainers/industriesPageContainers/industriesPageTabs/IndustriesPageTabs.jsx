import React, { useState } from 'react';
import './industriesPageTabs.css';
import financialInstitutions from '../../../../assets/industries page financial institutions.png';
import healthcare from '../../../../assets/industries page healthcare.png';
import engineering from '../../../../assets/industries page engineering & construction.png'
import oil from '../../../../assets/industries page oil & gas.png'
import telecom from '../../../../assets/industries page telecom & power.png'
import familyHouses from '../../../../assets/industries page family houses.png'
import realEstate from '../../../../assets/industries page real estate development.png'
import hospitality from '../../../../assets/industries page hospitality.png'

const IndustriesPageTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  const tabData = [
    {
      state: 1,
      tab: 'Financial institutions',
      heading: 'Financial Institutions, Non-Bank Financial Institutions and FinTech',
      text: 'We have a wealth of experts able to assist you in all aspects of your Financial Services business, from C-Suite strategic services to practical Treasury and Working Capital management. Financial Services is probably the most rapidly changing segment we focus on, new ideas, techniques and technology but with the same focus for professionalism and reputation.',
      img: financialInstitutions,
      title: 'Our Advisory Services include:',
      content: (
        <ul>
  <li>Strategic Partnerships – Banks & Fintechs</li>
  <li>M&A within Financial Services</li>
  <li>Global Transaction Banking</li>
  <li>Working Capital Solutions</li>
  <li>Correspondent Banking Services</li>
  <li>Anti Money Laundering & Compliance Advisory</li>
  <li>Client Acquisition & Strategy</li>
  <li>International Expansion</li>
</ul>

      ),
    },
    {
      state: 2,
      tab: 'Healthcare',
      heading: 'Improving Healthcare',
      text: 'Healthcare has been under extreme pressure in the last few years and will continue to require more attention as the demand for Healthcare services will only increase. Demographics and technological advances require constant investment and careful financial planning in this critical sector. Our expertise can help service providers manage their businesses in the most efficient ways.',
      img: healthcare,
      title: 'Our Healthcare services include:',
      content: (
        <ul>
          <li>Expert Financial Management experience in this sector</li>
          <li>Attractive long term investment options for larger projects</li>
          <li>Supply Chain expertise and Working Capital management</li>
          <li>Real Estate options for expansion</li>
          <li>Strategic alliances and partnerships</li>
          <li>Overseas expansion</li>
        </ul>

      ),
    },
    {
      state: 3,
      tab: 'Engineering & Construction',
      heading: 'Engineering & Construction',
      text: 'This sector continues to be driven by significant inward investment and the expansion of commercial activities. The provision of efficient infrastructure services is a crucial building block in a thriving and vibrant economy. Our Teams have operated within this sector for many years with first-hand experience of:',
      img: engineering,
      title: 'Our Engineering & Construction services include:',
      content: <ul>
      <li>Contract Management and Negotiation</li>
      <li>Financing of key contracts for large projects</li>
      <li>Supply Chain Advisory and Working Capital for this sector</li>
      <li>Overseas contractor and government contracts</li>
      <li>Leveraging foreign investment into key projects</li>
      <li>Accessing off-shore funding at preferential rates</li>
    </ul>    
    },
    {
      state: 4,
      tab: 'Oil & Gas',
      heading: 'Oil & Gas',
      text: 'A sector undergoing a continual transformation and one where our renewables expertise goes hand in hand with existing business management. This is a core activity of ours and will remain central to our focus. The Oil & Gas sector is pioneering the use of alternative sources of energy with continued investment in efficient use of existing technology while transitioning to a carbon neutral base.',
      img: oil,
      title: 'Our Oil & Gas services include:',
      content: <ul>
      <li>Capital Expenditure on upgrading existing infrastructure</li>
      <li>Support for construction of new facilities</li>
      <li>Renewable transition services</li>
      <li>Green Supply Chain advisory</li>
      <li>Leveraging foreign investment into eligible projects</li>
      <li>M&A Advisory for expansion into new carbon neutral sources</li>
    </ul>
    ,
    },
    {
      state: 5,
      tab: 'Telecom & Power',
      heading: 'Telecom & Power',
      text: 'A growing population and commercial expansion continues to place new strains onto existing Telecom and Power infrastructure. In some cases, increased capacity can be achieved through a direct access to newer technology in parallel to existing services to assist in a smooth transition. We can help you as you assess future options for your business in a greener, sustainable way.',
      img: telecom,
      title: 'Our Telecom & Power services include:',
      content: <ul>
      <li>Advisory support for renewable sources of power</li>
      <li>Financing for large capital expenditure projects</li>
      <li>Access to alternative sources of financing for green projects</li>
      <li>Efficient Supply Chain & Inventory solutions to manage Working Capital</li>
      <li>Leverage international suppliers and financial support</li>
      <li>Contract evaluation and management</li>
    </ul>
    ,
    },
    {
      state: 6,
      tab: 'family houses',
      heading: 'family houses',
      text: 'Our Leadership Team fully understand how Family Houses operate and the connectivity across all activities within the Group. Our approach treats the business operations as any other commercial activity but recognises the private wealth and support as part of a broader private wealth management engagement. We also recognise the importance of succession planning and provide support with management at all levels as and when required.',
      img: familyHouses,
      title: 'Our Family House services include:',
      content: <ul>
      <li>A comprehensive holistic approach to your family activities</li>
      <li>Independent advise and support for your commercial operations</li>
      <li>Succession planning and key officer support for critical roles</li>
      <li>Access to International financial markets and partners</li>
      <li>M&A Advisory for acquisitions and disposals</li>
      <li>IPO Advisory for your activities and the path to success</li>
    </ul>
    ,
    },
    {
      state: 7,
      tab: 'real estate development',
      heading:'Real estate development',
      text: 'Our knowledge in this sector reflects our deep and long standing engagement in the support of many Real Estate projects. We have a highly experienced Leadership Team with local knowledge while able to leverage support and finance from international sources. From Residential to Commercial to Hospitality, we can cover it all and help you from the design stage to final completion.',
      img: realEstate,
      title: 'Our Real Estate services include:',
      content: <ul>
      <li>A practical project based approach to each development</li>
      <li>Leverage our Family House expertise to support key developments</li>
      <li>Access International Markets for alternative sources of finance</li>
      <li>Succession planning for projects and management</li>
      <li>International support for Developments outside the region</li>
      <li>Negotiation with International suppliers and partners</li>
    </ul>
    ,
    },
    {
      state: 8,
      tab: 'hospitality',
      heading:'Hospitality',
      text: 'Hospitality is a key growth area within this region and typically involves International partners and brands. Our expertise can help you with International standards for negotiation and finance while maintaining the local connectivity and ownership.',
      img: hospitality,
      title: 'Our Hospitality services include:',
      content: <ul>
      <li>Project management for financing large projects</li>
      <li>International contract negotiation and evaluation</li>
      <li>Access International Markets for attractive sources of finance</li>
      <li>Support for renewable, carbon neutral projects and advise</li>
      <li>Synergy with your Family House and Real Estate projects where applicable</li>
      <li>Overseas support for out of region projects in Europe and the USA</li>
    </ul>
    ,
    },
  ];

  return (
    <div className='industries-page-tabs__container'>
      <div className='industries-page-tabs__container-tabs'>
        {tabData.map((item, index) => (
          <div
            key={index}
            className={activeTab === item.state ? 'active-tabs' : 'tabs'}
            onClick={() => toggleTab(item.state)}
          >
            {item.tab}
          </div>
        ))}
      </div>

      <div className='industries-page-tabs__container-content'>
        {tabData.map((item, index) => (
          <div
            key={item.title + index}
            className={activeTab === item.state ? 'content industries-page-tabs_fade-in ' : 'hide-content'}
          >
            <div className='industries-page-tabs_tab-heading'>
              <h1>{item.heading}</h1>
              <div className='industries-page-tabs_line' />
              <p>{item.text}</p>
            </div>
            <div className='industries-page-tabs_tab-contents'>
              <div className='industries-page-tabs_tab-contents-image'>
                <img src={item.img} alt={item.title} />
              </div>
              <div className='industries-page-tabs_tab-contents-text'>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesPageTab;
