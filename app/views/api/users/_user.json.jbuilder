json.extract! user, :id, :email, :fName, :lName, :zipcode
# debugger
if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
end