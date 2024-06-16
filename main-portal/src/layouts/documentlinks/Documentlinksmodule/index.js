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
          <p>Nothing Here....yet</p>
          <br></br>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Bart Simpson" />
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Philip J. Fry</Tab>
          <Tab>Turanga Leela</Tab>
          <Tab>Bender Bending Rodriguez</Tab>
          <Tab>Amy Wong</Tab>
          <Tab>Professor Hubert J. Farnsworth</Tab>
          <Tab>Doctor John Zoidberg</Tab>
        </TabList>
        <TabPanel>
          <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Philip J. Fry" />
        </TabPanel>
        <TabPanel>
          <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Turanga Leela" />
        </TabPanel>
        <TabPanel>
          <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry&apos;s best friend. Built in Tijuana, Mexico, he is the Planet Express Ship&apos;s cook.</p>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Bender Bending Rodriguez" />
        </TabPanel>
        <TabPanel>
          <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Bender Bending Rodriguez" />
        </TabPanel>
        <TabPanel>
          <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Professor Hubert J. Farnsworth" />
        </TabPanel>
        <TabPanel>
          <p>Alien from Decapod 10. Planet Express&apos; staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Doctor John Zoidberg" />
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
);

//render(Component1);

export default Component1;