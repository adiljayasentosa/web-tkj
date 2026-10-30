const permissions={admin:['attendance:write','attendance:read-all','tasks:write','tasks:read','finance:write','finance:read','reports:read','settings:write','accounts:write'],student:['attendance:read-own','tasks:read','tasks:complete','finance:read-summary'],teacher:['attendance:read-all','attendance:correct','tasks:read','finance:read-summary','reports:read']};
export const can=(role,permission)=>Boolean(permissions[role]?.includes(permission));
export const canOpen=(role,navItem)=>navItem.roles.includes('public')||navItem.roles.includes(role);
