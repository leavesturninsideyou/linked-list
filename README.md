# linked-list

This project contains a singly linked list, a common data structure. By default, there are three nodes.

You will need Node.js installed globally to run these files.

Take a look at the "documentation" below. You can edit the main file (linkedList.mjs) and run a function of your choosing.

### List of functions

1. ```append(value)``` - adds a new node containing ```value``` to the end of the list
2. ```prepend(value)``` - adds a new node containing ```value``` to the start of the list
3. ```size``` returns the total number of nodes in the list
4. ```head``` returns the first node in the list
5. ```tail``` returns the last node in the list
6. ```at(index)``` returns the node at the given ```index```
7. ```pop``` removes the last element from the list
8. ```contains(value)``` returns true if the passed in value is in the list and otherwise returns false.
9. ```find(value)``` returns the index of the node containing value, or null if not found.
10. ```toString``` represents the linked list as a string. ex: ```( value ) -> ( value ) -> ( value ) -> null```