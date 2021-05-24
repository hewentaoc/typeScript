enum Permission  {
    Read = 1,
    Write = 2,
    Create = 4,
    Delete = 8
}


let p:Permission = Permission.Read | Permission.Write;
console.log(Permission.Read,Permission.Write)

console.log('111',p)//3

/**
 * 
 * @param target 判断权限的用户
 * @param per 判断用户具备的权限
 * @returns 
 */
function hasPermission(target:Permission,per:Permission) {
    return (target & per) === per;
}
p = p ^ Permission.Write;
console.log(333,p)

console.log(hasPermission(p,Permission.Write))

