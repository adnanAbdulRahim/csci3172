# Activity / Lab / Assignment / Project Title

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 24 Sep 2024
* *Last Modification Date*: 24 Sep 2024
* *Lab URL*: <https://dal.brightspace.com/d2l/le/content/339466/Home?itemIdentifier=D2L.LE.Content.ContentObject.ModuleCO-4472693>


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Name](ad684424@dal.ca) - (Lead)


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### File Name

*Lines 3*

```
return Math.floor(Math.random() * (range + 1));

```

The code above was created by adapting the code in [NAME](https://www.w3schools.com/js/js_random.asp) as shown below: 


```
// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

```

- <!---How---> The code on the link was implemented by Math.Random and Math.floor
- <!---Why---> I was not familiar with Math.random methods so I googled for better understanding
- <!---How---> I modified it slightly as the code snippet they provided would give 0 to x-1
in order to counter that I added a + 1 within my function so if user requested 0 - 10 it 
won't give them 0 - 9 and.

GIT LINK: https://git.cs.dal.ca/abdulrahim/csci3172
TIMBERLEA LINK: https://web.cs.dal.ca/~abdulrahim/csci3172/activities/lecture7/
