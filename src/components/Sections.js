import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-material-responsive-grid';

import { getConfigured } from '../util';
import Separator from './Separator';
import Stories from './sections/Stories';
import Event from './sections/Event';
import Gifts from './sections/Gifts';
import Rsvp from './sections/Rsvp';

const sections = getConfigured(
  [Stories, Event, Gifts, Rsvp], 
  process.env.REACT_APP_ENABLED_SECTIONS, 
  s => s.title);
  
export const SECTION_NAMES = sections.map(s => s.title);

const Sections = ({content}) => (
  <Grid fixed='center'>
    {sections.map(SectionComponent => {
      const name = SectionComponent.title;
      return (
        <div key={name}>
          <Separator />
          <div id={name}>
            <h1>{name}</h1>
            <section>
              <SectionComponent content={content} />
            </section>
          </div>
        </div>
      );
    })}
  </Grid>
);

Sections.propTypes = {
  content: PropTypes.object.isRequired
};

export default Sections;