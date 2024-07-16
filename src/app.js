import './app.css';
import AccountOverview from './pages/account-overview/account-overview';

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
      phone: '020 3362 4208',
    },
    salesOverview: {
      successfulUploads: 3,
      uploadsAttempted: 10,
      linesAttempted: 20,
      linesSaved: 4,
    }
  }


  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub}/>
    </div>
  );
}

export default App;
