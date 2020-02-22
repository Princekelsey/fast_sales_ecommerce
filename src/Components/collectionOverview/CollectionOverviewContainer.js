import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionLoading } from "../../redux/shop/shopSelectors";
import Spinner from "../spinner/Spinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionLoading
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionOverview);

export default CollectionOverviewContainer;
