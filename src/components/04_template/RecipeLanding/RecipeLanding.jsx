import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as landingPageActions from '../../../actions/landingPages';
import Default from '../../05_page/Default/Default';
import TeaserFeatured from '../../03_organism/TeaserFeatured/TeaserFeatured';
import TeaserList from '../../03_organism/TeaserList/TeaserList';

class RecipeLanding extends Component {
  componentDidMount() {
    if (!this.props.categories.length) {
      this.props.loadRecipeLandingPage();
    }
  }
  render() {
    return (
      <Default>
        <div>
          <TeaserFeatured />
          {this.props.landingPageCategories.map(category => (
            <div key={category.id} >
              <h3>{this.props.categories[category.id].title}</h3>
              <TeaserList teasers={category.recipes.map(recipe => ({
                id: recipe,
                title: this.props.recipes[recipe].title,
                subtitle: this.props.recipes[recipe].time > 0 ? `${this.props.recipes[recipe].time}m` : '',
                image: this.props.files[this.props.recipes[recipe].image].uri,
              }))} />
            </div>
          ))}
          <TeaserFeatured textAlignment="right" />
        </div>
      </Default>
    );
  }
}

RecipeLanding.defaultProps = {
  categories: {},
  files: {},
  landingPageCategories: {},
  recipes: {},
};

RecipeLanding.loadData = [landingPageActions.loadRecipeLandingPage];

export default connect((state) => ({
  categories: state.api.categories,
  files: state.api.files,
  landingPageCategories: state.landingPages.categories,
  recipes: state.api.recipes,
}), { ...landingPageActions })(RecipeLanding);
