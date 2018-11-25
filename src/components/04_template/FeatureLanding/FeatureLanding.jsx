import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as landingPageActions from '../../../actions/landingPages';
import * as loadingBarActions from 'react-redux-loading-bar';
import Default from '../../05_page/Default/Default';
import TeaserFeatured from '../../03_organism/TeaserFeatured/TeaserFeatured';
import TeaserList from '../../03_organism/TeaserList/TeaserList';

class FeatureLanding extends Component {
  componentDidMount() {
    if (!this.props.landingPageCategories.length) {
      this.props.showLoading();
      this.props.loadFeatureLandingPage();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.landingPageCategories.length) {
      this.props.hideLoading();
    }
  }
  render() {
    if (this.props.landingPageCategories.length) {
      return (
        <Default>
          <div>
            <TeaserFeatured
              title="Featured"
              body="L'apprentissage de la langue"
              cta={{
                title: 'more',
                path: '/',
              }}
            />
            {this.props.landingPageCategories.map(category => (
              <div key={category.id}>
                <h3>{this.props.categories[category.id].title}</h3>
                <TeaserList teasers={category.recipes.map(recipe => ({
                  id: recipe,
                  title: this.props.recipes[recipe].title,
                  subtitle: this.props.recipes[recipe].time > 0 ? `${this.props.recipes[recipe].time}m` : '',
                  image: this.props.files[this.props.recipes[recipe].image].uri,
                }))}/>
              </div>
            ))}
            <TeaserFeatured
              title="More"
              body="edison bulb fingerstache skateboard poutine helvetica. "
              cta={{
                title: 'more',
                path: '/',
              }}
              textAlignment="right"
            />
          </div>
        </Default>
      );
    }
    return null;
  }
}

FeatureLanding.defaultProps = {
  categories: {},
  files: {},
  landingPageCategories: {},
  recipes: {},
};

FeatureLanding.loadData = [landingPageActions.loadFeatureLandingPage];

export default connect((state) => ({
  categories: state.api.categories,
  files: state.api.files,
  landingPageCategories: state.landingPages.categories,
  recipes: state.api.recipes,
}), { ...landingPageActions, ...loadingBarActions })(FeatureLanding);
