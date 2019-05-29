json.extract! user, :id, :email, :fName, :lName, :zipcode

if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
end