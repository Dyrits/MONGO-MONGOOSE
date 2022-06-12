require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const { personSchema, Person } = require("./Person");

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Dylan J. Gerrits",
    age: 33,
    favoriteFoods: ["Dakgalbi with cheese", "Hamburger"],
  });
  person.save((error, data) => {
    if (error) { return console.error(error); }
    done(null, data);
  });

};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (error, data) => {
    if (error) { return console.error(error); }
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (error, data) => {
        if (error) { return console.error(error); }
        done(null, data);
    });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (error, data) => {
    if (error) { return console.error(error); }
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
    Person.findById(personId, (error, data) => {
        if (error) { return console.error(error); }
        done(null, data);
    });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
    /*
    Person.updateOne({ _id: personId }, { $push: { favoriteFoods: foodToAdd } }, (error, data) => {
        if (error) { return console.error(error); }
        done(null, data);
    });
    */
    Person.findById(personId, (error, person) => {
        if(error) { return console.log(error); }
        person.favoriteFoods.push(foodToAdd);
        person.save((error, data) => {
            if(error) { return console.log(error); }
            done(null, data)
        })
    })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (error, data) => {
    if (error) { return console.error(error); }
    done(null, data);
  });
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};


//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
