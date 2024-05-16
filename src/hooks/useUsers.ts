// import { useState, useEffect } from 'react';
// import { User } from '../types/User';
// import users from '../data/users.json';


// export const useUsers = () => {
//     const data = users.users

//     const [filteredUsers, setFilteredUsers] = useState<User[]>(data);
//     const [searchQuery, setSearchQuery] = useState<string>('');

//     useEffect(() => {
//         if (searchQuery === '') {
//             setFilteredUsers(data);
//         } else {
//             setFilteredUsers(
//                 data.filter(data =>
//                     data.name.toLowerCase().includes(searchQuery.toLowerCase())
//                 )
//             );
//         }
//     }, [searchQuery]);

//     return { filteredUsers, searchQuery, setSearchQuery };
// };


