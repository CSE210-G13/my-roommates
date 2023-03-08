import { db } from "./firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  collegesConst,
  lifestyleConst,
  schoolYearsConst,
} from "@/constants/constants";
import { getUser } from "./userDb";
import { getAllUsers } from "./userDb";

export async function propertyFiltering(preference) {
  const properties = collection(db, "properties");
  var count = 0;
  // key: id; value: number of satisfied requirements
  var ids = {};

  if (preference["budgetMin"] != "") {
    var q = query(properties, where("price", ">=", +preference["budgetMin"]));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }
  if (preference["budgetMax"] != "") {
    var q = query(properties, where("price", "<=", +preference["budgetMax"]));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }
  if (preference["numBedrooms"] != "") {
    var q = query(
      properties,
      where("numOfBedroom", "==", +preference["numBedrooms"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }
  if (preference["numBathrooms"] != "") {
    var q = query(
      properties,
      where("numOfBathroom", "==", +preference["numBathrooms"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }

  if (preference["distance"] != "") {
    var q = query(
      properties,
      where("distanceToSchool", "<=", +preference["distance"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }

  if (preference["petChecked"] == true) {
    var q = query(
      properties,
      where("allowPets", "==", preference["petChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }
  if (preference["smokingChecked"] == true) {
    var q = query(
      properties,
      where("allowSmoking", "!=", preference["smokingChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }

  if (preference["parkingChecked"] == true) {
    var q = query(
      properties,
      where("amenities.parking", "==", preference["parkingChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }
  if (preference["laundryChecked"] == true) {
    var q = query(
      properties,
      where("amenities.laundry", "==", preference["laundryChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }

  if (preference["poolChecked"] == true) {
    var q = query(
      properties,
      where("amenities.pool", "==", preference["poolChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }

  if (preference["gymChecked"] == true) {
    var q = query(
      properties,
      where("amenities.gym", "==", preference["gymChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }

  if (preference["acChecked"] == true) {
    var q = query(
      properties,
      where("amenities.airConditioner", "==", preference["acChecked"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ids[doc.id] = (ids[doc.id] || 0) + 1;
    });
    count += 1;
  }
  var priorityList = [];
  while (count > 0) {
    for (var m in ids) {
      if (ids[m] == count) {
        priorityList.push(m);
      }
    }
    count -= 1;
  }
  return priorityList;
}

export async function roommatesFiltering(preference) {
  const dislikes = lifestyleConst;
  const colleges = collegesConst;
  const years = schoolYearsConst;
  const roommates = collection(db, "users");
  var exact_match_count = 0;
  // key: id; value: number of satisfied requirements
  var ids = {};
  var gender_flag = false;
  var bedtime_flag = false;
  var colleges_flag = false;
  var years_flag = false;

  if (preference["femaleChecked"] == true) {
    var q = query(roommates, where("gender", "==", "Female"));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var uid = doc.data().uid;
      ids[uid] = (ids[uid] || 0) + 1;
    });
    gender_flag = true;
  }

  if (preference["maleChecked"] == true) {
    var q = query(roommates, where("gender", "==", "Male"));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var uid = doc.data().uid;
      ids[uid] = (ids[uid] || 0) + 1;
    });
    gender_flag = true;
  }

  if (preference["bedtimeFrom"]) {
    var q = query(roommates, where("bedtime", ">=", preference["bedtimeFrom"]));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var uid = doc.data().uid;
      ids[uid] = (ids[uid] || 0) + 1;
    });
    bedtime_flag = true;
  }

  if (preference["bedtimeTo"]) {
    var q = query(roommates, where("bedtime", "<=", preference["bedtimeTo"]));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var uid = doc.data().uid;
      ids[uid] = (ids[uid] || 0) + 1;
    });
    bedtime_flag = true;
  }

  if (preference["languages"].length > 0) {
    var q = query(
      roommates,
      where("languages", "array-contains-any", preference["languages"])
    );
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var uid = doc.data().uid;
      ids[uid] = (ids[uid] || 0) + 1;
    });
    exact_match_count += 1;
  }

  if (preference["majors"].length > 0) {
    var q = query(roommates, where("major", "in", preference["majors"]));
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var uid = doc.data().uid;
      ids[uid] = (ids[uid] || 0) + 1;
    });
    exact_match_count += 1;
  }

  for (const d of dislikes) {
    if (preference["dislikes"][d] == true) {
      var q = query(
        roommates,
        where("lifestyle." + d.toLowerCase(), "==", true)
      );
      var querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var uid = doc.data().uid;
        ids[uid] = (ids[uid] || 0) + 1;
      });
      exact_match_count += 1;
    }
  }

  for (const c of colleges) {
    if (preference["colleges"][c] == true) {
      var q = query(roommates, where("college", "==", c));
      var querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var uid = doc.data().uid;
        ids[uid] = (ids[uid] || 0) + 1;
      });
      colleges_flag = true;
    }
  }

  for (const y of years) {
    if (preference["years"][y] == true) {
      var q = query(roommates, where("schoolYear", "==", y));
      var querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var uid = doc.data().uid;
        ids[uid] = (ids[uid] || 0) + 1;
      });
      years_flag = true;
    }
  }

  // count the number of exact match
  if (years_flag == true) {
    exact_match_count += 1;
  }

  if (colleges_flag == true) {
    exact_match_count += 1;
  }

  if (bedtime_flag == true) {
    exact_match_count += 1;
  }

  if (gender_flag == true) {
    exact_match_count += 1;
  }

  var exact_match = [];
  var priorityList = [];
  var count = exact_match_count;
  // handle the case which user doesn't filter anything
  if (count == 0) {
    var allUsersData = await getAllUsers();
    var limit_count = 0;
    while (limit_count < 10) {
      exact_match.push(allUsersData[limit_count]);
      limit_count += 1;
    }
    return [1, exact_match, priorityList];
  } else {
    while (count >= 0) {
      for (var m in ids) {
        if ((exact_match_count == count) & (ids[m] == count)) {
          var uData = await getUser(m);
          exact_match.push(uData);
        } else {
          if (ids[m] == count) {
            var uData = await getUser(m);
            priorityList.push(uData);
          }
        }
      }
      count -= 1;
    }
    var limited_exact_match = exact_match.slice(0, 10);
    var limited_priorityList = priorityList.slice(0, 10);
    return [1, limited_exact_match, limited_priorityList];
  }
}
