class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const member = new FamilyMember(name, age, gender);
  familyMembers.push(member);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = ""; //to clear the table

  for (const member of familyMembers) {
    const row = document.createElement("tr");
    row.innerHTML =`
      <td>${member.name}</td>
      <td>${member.age}</td>
      <td>${member.gender}</td>
      <td>
        <button onclick="addAge(${familyMembers.indexOf(member)})">Add Age</button>
        <button onclick="changeName(${familyMembers.indexOf(member)})">Change Name</button>
      </td>
      `;
    familyList.appendChild(row);
  }
}

function addAge(index) {
  familyMembers[index].age++;
  reloadFamilyMembers();
} // this function takes an 'index' parameter, which is the index of the family member in the familyMembers array. It then increments the age of the family by access the family member at the given index and increment its age property.

function changeName(index) {
    const newName = prompt("Enter a new name:");
    if (newName !== null) {
      familyMembers[index].name = newName;
      reloadFamilyMembers();
    }
  } 