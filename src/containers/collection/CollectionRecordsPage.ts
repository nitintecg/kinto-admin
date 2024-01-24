import * as CollectionActions from "../../actions/collection";
import * as NotificationsActions from "../../actions/notifications";
import * as RouteActions from "../../actions/route";
import type { StateProps } from "../../components/collection/CollectionRecords";
import CollectionRecords from "../../components/collection/CollectionRecords";
import type { AppState } from "../../types";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { push as updatePath } from "redux-first-history";

function mapStateToProps(state: AppState): StateProps {
  return {
    session: state.session,
    bucket: state.bucket,
    collection: state.collection,
    capabilities: state.session.serverInfo.capabilities,
  };
}

type DispatchProps = typeof CollectionActions &
  typeof NotificationsActions &
  typeof RouteActions & {
    updatePath: typeof updatePath;
  };

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators(
    {
      ...CollectionActions,
      ...NotificationsActions,
      ...RouteActions,
      updatePath,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRecords);
