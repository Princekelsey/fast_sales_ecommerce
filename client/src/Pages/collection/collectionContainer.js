import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shopSelectors";
import Spinner from "../../Components/spinner/Spinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(Collection);

export default CollectionPageContainer;
