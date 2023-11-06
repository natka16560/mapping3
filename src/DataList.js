import data from './data.js'

const DataList = () => {
    return (
      <div>
        {data.map((i, index) => (
          <div key={index}>
            Имя: {i.name}
          </div>
        ))}
      </div>
    );
  }

  export default DataList;