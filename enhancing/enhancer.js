module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    return newItem = {
      ...item, 
      enhancement: item.enhancement + 1
    }
  } else {
    return item
  }

}

function fail(item) {
  if (item.enhancement < 15) {
    return newItem = {
      ...item, 
      durability: item.durability - 5
    } 
  } else if (item.enhancement >= 16 ) {
    return newItem = {
      ...item, 
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    }
  } else if (item.enhancement >= 15) {
    return newItem = {
      ...item, 
      durability: item.durability - 10
    }
  }
}

function repair(item) {
  return newItem = { 
    ...item,
    durability: 100
  }
}

function get(item) {
  return { ...item };
}
