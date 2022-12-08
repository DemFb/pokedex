// import SearchBar from 'react-native-dynamic-search-bar';
// import React, {useMemo, useState} from 'react';
// import {data} from './Home';

// export const BarDeRecherche = props => {
//   const [text, setText] = useState('');

//   const datafilter = useMemo(() => {
//     return data
//       .filter(function (item) {
//         return item.name.includes(text);
//       })
//       .map(function ({id, name, image}) {
//         return {id, name, image};
//       });
//   }, [text]);

//   return (
//     <SearchBar
//       style={{marginTop: 50}}
//       placeholder="Search here"
//       onPress={() => clearImmediate}
//       onChangeText={newText => setText(newText)}
//       value={text}
//     />
//   );
// };
