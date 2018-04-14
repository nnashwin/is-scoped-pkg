import test from 'ava';
import isScoped from '.';

test('scoped org package returns true', t => {
	t.truthy(isScoped('@cookieOrg/demobot'));
});

test('non-scoped package returns false', t => {
	t.falsy(isScoped('demobot'));
});

test('invalid package returns false', t => {
	t.falsy(isScoped('@cookieOrg'));
});
