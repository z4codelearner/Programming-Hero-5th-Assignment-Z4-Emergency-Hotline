# **Clear answers to the questions are given step by step.**

## **What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?** 

# **Answer to the question:**

getElementById

    -১টি নির্দিষ্ট id দিয়ে DOM elment খুঁজে বের করে। আবার এটি সরাসরি ১টি element return ও করে। 

getElementByClassName

    -এইটা ১টা HTMLcollection রিটার্ন করে যেটা নির্দিষ্ট class সহ সকল element ধারন করে। এইটা live Collection, মানে DOM পরিবর্তন হলে নিজে নিজেই আপডেট হয়ে যায়।

querySelector / querySelectorAll

    -CSS Selector use করে element select করা যায়।
    -querySelector :- শুধু ১ম ম্যাচিং element
    -querySelectorAll :- সব ম্যাচিং Noodelist আকারে।



## **How do you create and insert a new element into the DOM?** 

# **Answer to the question:**

নতুন element create করে DOM এ যোক্ত করার জন্য JavaScript এ document.createElement() ব্যবহার করতে হয়। যেমন- ১টা নতুন div তৈরি করতে লিখতে পারি const newDiv = document.createElement('div'); তারপর চাইলে textContent বা innerHTML ব্যবহার করে এতে text বা HTML content যোগ করতে পারি। যেমন- newDiv.textContent = "Hello Programming Hero!" বা newDiv.innerHTML = "<strong>Readme file  write So much boooring... </strong>";

নতুন element create করার পর সেটিকে DOM এর কোনো parent element এর সাথে যোগ করতে হবে। এটি বিভিন্ন ভাবে করা যায়। appendChild() ব্যবহার করলে element parent এর শেষের দিকে যোগ হয়। যেমন- parent.appendChild(newDiv);। আর prepend() use করলে element parent -এর শুরুতে যোগ হয়। এছাড়া inertBefore() use করে নির্দিষ্ট কোনো exisitibg element এর আগে নতুন করে element যোগ করা যায়।


## **What is Event Bubbling and how does it work?** 

# **Answer to the question:**

Event Bubbling হচ্ছে ১টা event handling প্রক্রিয়া যেখানে event প্রথমে child element -এ ঘটেছে এবং তারপর ধীরে ধীরে parent element -এর দিকে ছড়ায়। মানে, যদি কোনো child elemnt ক্লিক করা হয়, তবে প্রথমে child -এর event handler চলে এবং তারপর parent -এর handler-ও চলে, child থেকে parent পর্যন্ত। DOM এর hierarchy অনুযায়ী উপরের দিকে "বুদবুদ" করে চলে, তাই এইটাকে Event Bubbling বলে।


## **What is Event Delegation in JavaScript? Why is it useful?** 

# **Answer to the question:**

Event Delegation হলো ১টা টেকনিক যেখানে parent element -এর উপর ইভেন্ট listener বাসানো হয় এবং child element -গুলোর event handle করা হয়। এইটা Event Bubbling ব্যবহার করে কাজ করে। এটি কাজে লাগে কারণ একাধিক child element -এর জন্য আলাদা listener লাগানোর প্রয়োজন পরে না, নতুন child যোগ করলেও listener কাজ করে এবং performace ভালো থাকে।

## **What is the difference between preventDefault() and stopPropagation() methods?** 

# **Answer to the question:**

preventDefault() eventer Default আচারণ বন্ধ করে, যেমন ১টা link click করলে page refresh বা অন্য URL- এ যাওয়া বন্ধ করা। stopPropagation() ইভেন্টকে parent element পর্যন্ত ছাড়াতে দেয় না, অর্থাৎ Event Bubbling বন্ধ করে। সংক্ষেপে, preventDefault() default action বন্ধ করে, আর stopPropagation() Event-এর ছড়ানো বন্ধ করে।