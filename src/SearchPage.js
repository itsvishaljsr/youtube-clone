import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
   <div className="searchPage">
    <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
    </div>
    <hr />

    <ChannelRow
        image="https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="tcser vishal"
        verified="false"
        subs="156"
        noOfVideos={15}
        description="Welcome to tcser vishal, My Self Vishal Prajapati • Vishal Prajapati • I am an ignite trainee at Tata ..."
    />

    <hr />
    <VideoRow 
    views="78 views"
    description="Getting Data from API is like bread and butter. I demonstrat..."
    timestamp="7 days ago"
    channel= "tcser vishal"
    title="Learn API with Live Project | Simply Explained"
    image="https://i.ytimg.com/vi/F2qc2OXqQW0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtJlhp1ECVxB42TQgQX-Cp28oANA"
    image_logo = "https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
    />

    <VideoRow 
    views="61 views"
    description="JSON is a file format. The technique of getting data from JSON..."
    timestamp="11 days ago"
    channel= "tcser vishal"
    title="Learn JSON with Live Example | Simply Explained"
    image="https://i.ytimg.com/vi/xXlYtuHbTK4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_JkK61VezRUnJOo2ZOWifchSwGQ"
    image_logo = "https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
    />
    
    <VideoRow 
    views="3.6k views"
    description="In 2022, TCS ignite batch 33 got offline training at the Chennai campus. So, this is the first video of the tcs ignite..."
    timestamp="2 months ago"
    channel= "tcser vishal"
    title="Documentation process -Day 1 | tcs ignite series 2022"
    image="https://i.ytimg.com/vi/iBiHH32m_Pc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdMP39QbRznfU0iPyuorP1oZM84A"
    image_logo = "https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
    />
    
    <VideoRow 
    views="430 views"
    description="It's my beach Vlog and it has lots of memories that I will never forget. Friendship is another word for love. I am..."
    timestamp="1 month ago"
    channel= "tcser vishal"
    title="Beach vlog with friends | tcser Vishal 🏖️"
    image="https://i.ytimg.com/vi/SGqC1qDEcng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_3Evr_BGw3r6E14unidFMof6F2g"
    image_logo = "https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
    />
    
    <VideoRow 
    views="2.2k views"
    description="This video covers the orientation program of tcs ignite candidates. So, this is the second video of the tcs ignite..."
    timestamp="2 months ago"
    channel= "tcser vishal"
    title="Orientation & siruseri tour - Day 2 | tcs ignite series 2022"
    image="https://i.ytimg.com/vi/tCloUPP_cuE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD--smZjq0BDj7pYeBwp06TIVrXrQ"
    image_logo = "https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
    />
    
    <VideoRow 
    views="11k views"
    description="tcs #tcs_welcome_kit I finally got my joining kit from TCS, I'm so happy to share this video with you all. TCS welcomes..."
    timestamp="1 month ago"
    channel= "tcser vishal"
    title="TCS joining kit | Welcome kit | TCS goodies 2022"
    image="https://i.ytimg.com/vi/_Om6NWhfQP4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCajyL-QlnMXPc2dVTOyNFJf7wNgw"
    image_logo = "https://yt3.ggpht.com/7-l80Vz3ukEKm9APbHnf1z5xUF9IVbFlGod2VMAOPgb-T9Q4YwK9YgX_9gtAOoiyGINmclGiaQ=s176-c-k-c0x00ffffff-no-rj-mo"
    />
   </div>
  );
}

export default SearchPage