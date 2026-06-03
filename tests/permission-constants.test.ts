import * as pkg from '../src';
import { PERMISSIONS } from '../src';

describe('PERMISSIONS named re-export', () => {
  it('resolves PERMISSIONS from package root', () => {
    expect(PERMISSIONS).toBeDefined();
    expect(typeof PERMISSIONS).toBe('object');
  });

  it('keeps existing SERVICE_BROKER default export intact', () => {
    expect(pkg.default).toBeDefined();
    expect(typeof pkg.default).toBe('object');
  });
});

describe('ORGANIZATION_* permission constants', () => {
  const ORG_PREFIX = 'organization_service:operational_organization';

  it('exports application-level wildcard', () => {
    expect(PERMISSIONS.ORGANIZATION_APP_FULL).toBe('organization_service:*');
  });

  it('exports group-level wildcard', () => {
    expect(PERMISSIONS.ORGANIZATION_GROUP_FULL).toBe(`${ORG_PREFIX}:*`);
  });

  describe('employees feature', () => {
    it('exposes per-action keys matching the permission tree exactly', () => {
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_FULL).toBe(`${ORG_PREFIX}:employees:*`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_LIST).toBe(`${ORG_PREFIX}:employees:list`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_READ).toBe(`${ORG_PREFIX}:employees:read`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_CREATE).toBe(`${ORG_PREFIX}:employees:create`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_UPDATE).toBe(`${ORG_PREFIX}:employees:update`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_DELETE).toBe(`${ORG_PREFIX}:employees:delete`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_DOWNLOAD).toBe(`${ORG_PREFIX}:employees:download`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_UPLOAD).toBe(`${ORG_PREFIX}:employees:upload`);
      expect(PERMISSIONS.ORGANIZATION_EMPLOYEES_CANCEL_APPROVE).toBe(`${ORG_PREFIX}:employees:cancel_approve`);
    });
  });

  describe('organizational feature', () => {
    it('exposes per-action keys including update_status + approve', () => {
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_FULL).toBe(`${ORG_PREFIX}:organizational:*`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_LIST).toBe(`${ORG_PREFIX}:organizational:list`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_READ).toBe(`${ORG_PREFIX}:organizational:read`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_CREATE).toBe(`${ORG_PREFIX}:organizational:create`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_UPDATE).toBe(`${ORG_PREFIX}:organizational:update`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_DELETE).toBe(`${ORG_PREFIX}:organizational:delete`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_DOWNLOAD).toBe(`${ORG_PREFIX}:organizational:download`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_UPLOAD).toBe(`${ORG_PREFIX}:organizational:upload`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_APPROVE).toBe(`${ORG_PREFIX}:organizational:approve`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_CANCEL_APPROVE).toBe(`${ORG_PREFIX}:organizational:cancel_approve`);
      expect(PERMISSIONS.ORGANIZATION_ORGANIZATIONAL_UPDATE_STATUS).toBe(`${ORG_PREFIX}:organizational:update_status`);
    });
  });

  describe('value_chains feature', () => {
    it('exposes per-action keys matching tree (no cancel_approve, no update_status)', () => {
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_FULL).toBe(`${ORG_PREFIX}:value_chains:*`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_LIST).toBe(`${ORG_PREFIX}:value_chains:list`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_READ).toBe(`${ORG_PREFIX}:value_chains:read`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_CREATE).toBe(`${ORG_PREFIX}:value_chains:create`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_UPDATE).toBe(`${ORG_PREFIX}:value_chains:update`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_DELETE).toBe(`${ORG_PREFIX}:value_chains:delete`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_DOWNLOAD).toBe(`${ORG_PREFIX}:value_chains:download`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_UPLOAD).toBe(`${ORG_PREFIX}:value_chains:upload`);
      expect(PERMISSIONS.ORGANIZATION_VALUE_CHAINS_APPROVE).toBe(`${ORG_PREFIX}:value_chains:approve`);
    });
  });

  describe('mission feature', () => {
    it('exposes per-action keys including copy + setting', () => {
      expect(PERMISSIONS.ORGANIZATION_MISSION_FULL).toBe(`${ORG_PREFIX}:mission:*`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_LIST).toBe(`${ORG_PREFIX}:mission:list`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_READ).toBe(`${ORG_PREFIX}:mission:read`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_CREATE).toBe(`${ORG_PREFIX}:mission:create`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_UPDATE).toBe(`${ORG_PREFIX}:mission:update`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_DELETE).toBe(`${ORG_PREFIX}:mission:delete`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_DOWNLOAD).toBe(`${ORG_PREFIX}:mission:download`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_UPLOAD).toBe(`${ORG_PREFIX}:mission:upload`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_APPROVE).toBe(`${ORG_PREFIX}:mission:approve`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_COPY).toBe(`${ORG_PREFIX}:mission:copy`);
      expect(PERMISSIONS.ORGANIZATION_MISSION_SETTING).toBe(`${ORG_PREFIX}:mission:setting`);
    });
  });
});

describe('SYSTEM_* permission constants', () => {
  it('exports SYSTEM_PERMISSION_CACHE_EVICT', () => {
    expect(PERMISSIONS.SYSTEM_PERMISSION_CACHE_EVICT).toBe('system_management:permission_cache:evict');
  });
});

describe('PERMISSIONS shape contract', () => {
  it('every value matches application[:segment]*:action pattern', () => {
    for (const [, value] of Object.entries(PERMISSIONS)) {
      expect(value).toMatch(/^[a-z_]+(:[a-z_*]+)+$/);
    }
  });
});
