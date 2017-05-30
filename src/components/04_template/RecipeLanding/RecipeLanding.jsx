import React from 'react';
import Default from '../../05_page/Default/Default';
import TeaserFeatured from '../../03_organism/TeaserFeatured/TeaserFeatured';
import TeaserList from '../../03_organism/TeaserList/TeaserList';

const categories = [
  'Dessert',
  'Soup',
  'Salad',
  'Entree',
  'Snacks',
];

const RecipeLanding = () => (
  <Default>
    <div>
      <TeaserFeatured />
      {categories.map(category =>
        <div key={category}>
          <h2>{category} Recipes</h2>
          <TeaserList category={category.toLowerCase()} />
        </div>
      )}
      <TeaserFeatured textAlignment="right" />
    </div>
  </Default>
);

export default RecipeLanding;
