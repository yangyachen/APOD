import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Astronomy from './component';

const name = 'Astronomy';

const load = () => {
  const story = storiesOf(name, module);

  story.add('NO DATA', () => {
    const props = {
        reload: action('reload'),
    };

    return (<Astronomy {...props} />);
  });

  story.add('Astronomy', () => {
    const props = {
        // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
        data: {
            "date": "2018-04-11", 
            "explanation": "Was this flash the farthest star yet seen? An unexpected flash of light noticed fortuitously on Hubble Space Telescope images may prove to be not only an unusual gravitational lensing event but also an image of a normal star 100 times farther away than any star previously imaged individually. The featured image shows the galaxy cluster on the left complete with many yellowish galaxies, while on the right is an expanded square where a source appeared in 2016 that was not evident in 2011. The spectrum and variability of this source are strangely unlike a supernova, but rather appear more consistent with a normal blue supergiant star magnified by about a factor of 2000 by a confluence of aligned gravitational lenses.  Dubbed Icarus, the source is in a galaxy well behind the galaxy cluster and far across the universe -- at redshift 1.5.  If the lens interpretation is correct and Icarus is not an exploding star, further observations of it and other similarly magnified stars could give information about the stellar and dark matter content in the galaxy cluster and the universe.   Open Science: Browse 1,600+ codes in the Astrophysics Source Code Library", 
            "hdurl": "https://apod.nasa.gov/apod/image/1804/FarthestStar_Hubble_2000.jpg", 
            "media_type": "image", 
            "service_version": "v1", 
            "title": "Fortuitous Flash Candidate for the Farthest Star Yet Seen", 
            "url": "https://apod.nasa.gov/apod/image/1804/FarthestStar_Hubble_1080.jpg"
        },
        reload: action('reload'),
    };

    return (<Astronomy {...props} />);
  });
};

export {
  name,
  load,
};
