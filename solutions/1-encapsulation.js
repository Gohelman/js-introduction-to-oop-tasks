// BEGIN
const getMutualFriends = (firstUser, secondUser) => { 
  const firstFriends = firstUser.getFriends();
  const secondFriends = secondUser.getFriends();
  
  const mutualFriends = firstFriends.filter(firstfriend => 
    secondFriends.some(secondfriend => secondfriend.id === firstfriend.id)
  );
  
  return mutualFriends;
};

export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
}); 