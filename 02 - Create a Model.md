# Create a Model

## CRUD Part I - CREATE

First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building block for Models. They can be nested to create complex models, but in this case we'll keep things simple. A model allows you to create instances of your objects, called documents.

Replit is a real server, and in real servers the interactions with the database happen in handler functions. These functions are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The `done()` function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting. It's following the Node convention, and should be called as `done(null, data)` on success, or `done(err)` on error.

Warning - When interacting with remote services, errors may occur!

```javascript
/* Example */

const someFunc = function(done) {
//... do something (risky) ...
if (error) return done(error);
done(null, result);
};
```

---

Create a person schema called `personSchema` having this prototype:

```
- Person Prototype -
--------------------
name : string [required]
age :  number
favoriteFoods : array of strings (*)
```

Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See the [Mongoose docs](mongoosejs.com/docs/guide.html).

Now, create a model called `Person` from the `personSchema`.
