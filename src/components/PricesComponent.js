import * as React from 'react';
import {connect} from 'react-redux';
import {loadPrices} from "../actions";
import {withPolling} from "./withPolling";
class PricesComponent extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Last Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.prices.map(item => (
                        <tr key={item.userId}>
                            <td>{item.userId}</td>
                            <td>{item.Id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
                            <td>{new Date().toLocaleTimeString()}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    prices: state.data.prices
});
const mapDispatchToProps = {};
export default withPolling(loadPrices)(
    connect(mapStateToProps, mapDispatchToProps)(PricesComponent)
  );
