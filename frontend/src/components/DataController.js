import React from "react";
import { Error } from "./Error";
import { LoadingIcon } from "./LoadingIcon";
import { CurrencyForm } from "./CurrencyForm";
import { Source } from "./Source";

// mockData
const mockData = {
  "success": true,
  "timestamp": 1619432343,
  "base": "SGD",
  "date": "2022-07-22",
  "rates": {
    "SGD": 1,
    "CAD": 0.9255,
    "CNH": 4.7868,
    "EUR": 0.7086,
    "HKD": 5.5830,
    "JPY": 97.5303,
    "NZD": 1.1612,
    "NOK": 7.2912,
    "GBP": 0.5974,
    "SEK": 7.5168,
    "THB": 25.7275,
    "USD": 0.7113,
  }
};


export class DataController extends React.Component {
  static displayName = "DataController";
  state = {
    data: undefined,
    error: undefined,
    loading: false,
  };
  
  componentDidMount() {
    this.setState({ data: mockData });
    // this.loadData();
  }

  loadData = () => {
    const { url } = this.props;
    this.setState({ loading: true });
    fetch(url)
      .then(resp => resp.json())
      .then(
        (data) => {
          if (data.error) {
            this.setState({
              loading: false,
              error: data.error,
            });
          }
          else {
            this.setState({
              loading: false,
              data,
            });
          }
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );
  }
  
  render() {
    const { url } = this.props;
    const { error, loading, data } = this.state;

    if (error) {
      return <Error message={error.message || error.info} />;
    }

    if (loading) {
      return <LoadingIcon />;
    }

    if (!data?.base || !data?.rates) {
      return (<Error message="There is no results to display. Please try again later." />);
    }

    const { base, rates, date } = data;

    return (<>
      <CurrencyForm base={base} rates={rates} />
      <Source url={url} date={date} />
    </>);
  }
}
