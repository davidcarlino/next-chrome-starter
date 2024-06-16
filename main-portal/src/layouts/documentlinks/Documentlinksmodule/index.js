import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import './App.css';

const Component1 = () => (
  <Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>
      <Tab>Compliance & Execution</Tab>
      <Tab>Sales & Product</Tab>
    </TabList>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
        <Tab>Execution Request</Tab>
          <Tab>Incidents and Complaints</Tab>
          <Tab>Other Forms</Tab>
        </TabList>
        <TabPanel>
        <div className="navigatetolinkbutton">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScGl8TEUni9j-UxCK5GSyhnaJMafdRh_1y7ah1X3kAY-GF7Zg/viewform 

" target="noopener" className="btn customButton x-large icon-after chev-right">Execution Request Form  ⮞</a>
</div>
        </TabPanel>
        <TabPanel>
        <div className="navigatetolinkbutton">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7TfO2dhr_YFrVwKSFUEmQXvlUGZbYRxoIkVj1rNCDnf-Suw/viewform
" target="noopener" className="btn customButton x-large icon-after chev-right">Incidents and Complaints Form  ⮞</a>
</div>
        </TabPanel>
        <TabPanel>
        <br></br>
          <p>Nothing Here....yet</p>
          <br></br>
          <p>Submit Feedback Below for any new links or updates.</p>
          <br></br>
          <div className="navigatetolinkbutton">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScPNcHHU8YAIJ3MsKHWE1kLRrhiso9BYW2YPMydf6r6jqH1_w/viewform?usp=sf_link" target="noopener" className="btn customButton x-large icon-after chev-right">Give Feedback  ⮞</a>
</div>
 </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Sales Prospecting</Tab>
          <Tab>Pepe</Tab>
          <Tab>Other Forms</Tab>
          
        </TabList>
        <TabPanel>
        <br></br>
          <div className="navigatetolinkbutton">
        <a href="https://docs.google.com/forms/d/12VcmK66pzgaHeWhTI_YzDxZd1WB9TrbGDAvuPqrHtr4/viewform?edit_requested=true" target="noopener" className="btn customButton x-large icon-after chev-right">Investor Profiling Form  ⮞</a>
</div>
<div className="navigatetolinkbutton">
        <a href="https://docs.google.com/forms/d/1SX7_3pQ9R0DmwFYSR9PKGxHPRrlkG-NbvkRuhObj44o/viewform?edit_requested=true" target="noopener" className="btn customButton x-large icon-after chev-right">Investor Risk Assessment Form  ⮞</a>
</div> 
 </TabPanel>
        <TabPanel>
<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Pepe" />
         </TabPanel>
        <TabPanel>
        <br></br>
          <p>Nothing Here....yet</p>
          <br></br>
          <p>Submit Feedback Below for any new links or updates.</p>
          <br></br>
          <div className="navigatetolinkbutton">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScPNcHHU8YAIJ3MsKHWE1kLRrhiso9BYW2YPMydf6r6jqH1_w/viewform?usp=sf_link" target="noopener" className="btn customButton x-large icon-after chev-right">Give Feedback  ⮞</a>
</div>
 </TabPanel>
        <TabPanel>
          <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
          </TabPanel>
        <TabPanel>
          <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
           </TabPanel>
        <TabPanel>
          <p>Alien from Decapod 10. Planet Express&apos; staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
             </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
);

//render(Component1);

export default Component1;