import React from 'react';
import ItemActions from '../actions/itemActions';
var mui = require('material-ui'),
    Snackbar = mui.Snackbar;

class ItemList extends React.Component {

    constructor() {
    }

    render() {
        var error = '';
        if(this.props.error)
            error = (<h4>{this.props.error}</h4>);

        var detail = '';
        if(this.props.showDetailItem)
            detail = (<h3>Show detail: {this.props.showDetailItem.title}</h3>);

        let items = this.props.items.map((item) => {
            var backgroundStyle = item.posters && item.posters.thumbnail ? {
                color: '#fff',
                background: "url('" + item.posters.thumbnail + "') top left 5% no-repeat #46B6AC"
            } : {color: '#fff'};
            var boundClick = function () {
                if (item) ItemActions.showItemDetail(item);
            };

            return (
                <div key={ item.id } style={styles.demoCardSquare} className="mdl-card mdl-shadow--2dp">
                    <div style={backgroundStyle} className="mdl-card__title mdl-card--expand">
                        <h2 className="mdl-card__title-text">{ item.title }</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {item.year} - {item.mpaa_rating}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={boundClick}>
                            Show Details
                        </button>
                    </div>
                </div>
            );
            //return (<li key={ item.id }>{ item.title } ({item.year})</li>);
        });
        let loading = this.props.loading ? <div className="loading-label">Loading...</div> : '';


        return (
            <div>
                { error }
                { detail }
                { loading }
                { items }
            </div>
        );
    }

}

ItemList.contextTypes = {
    muiTheme: React.PropTypes.object
};

var styles = {
    demoCardSquare: {
        width: 320,
        height: 320,
        margin: 25
    }
};

ItemList.propTypes = {
    loading: React.PropTypes.bool,
    items: React.PropTypes.array,
    error: React.PropTypes.string,
    showDetailItem: React.PropTypes.object
};

export default ItemList;

