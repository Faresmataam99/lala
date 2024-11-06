const mongoose = require ('mongoose')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    email: { type: String, required: true, unique: true }
  });

  const createUser = async (name, age, email) => {
    try {
      const user = new User({ name, age, email });
      const savedUser = await user.save();
      console.log('User created:', savedUser);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };
  const getAllUsers = async () => {
    try {
      const users = await User.find();
      console.log('All users:', users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const updateUser = async (id, newData) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true });
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };
  const deleteUser = async (id) => {
    try {
      const deletedUser = await User.findByIdAndRemove(id);
      console.log('User deleted:', deletedUser);
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };
  // Create
createUser('Bob', 25, 'bob@example.com');

// Read
getAllUsers();

// Update
updateUser('id_here', { age: 26 });

// Delete
deleteUser('id_here');

mongoose.connect('mongodb://127.0.0.1:27017/product');

app.listen(3000, ()=>('Started server on :http://localhost:3000')) 



