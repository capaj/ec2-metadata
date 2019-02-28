import syncRequest from 'sync-request'
import got from 'got'

const url = 'http://169.254.169.254/latest/meta-data/'
export type ec2MetadatKeys =
  | 'ami-id'
  | 'ami-launch-index'
  | 'ami-manifest-path'
  | 'block-device-mapping/'
  | 'events/'
  | 'hostname'
  | 'iam/'
  | 'identity-credentials/'
  | 'instance-action'
  | 'instance-id'
  | 'instance-type'
  | 'local-hostname'
  | 'local-ipv4'
  | 'mac'
  | 'metrics/'
  | 'network/'
  | 'placement/'
  | 'profile'
  | 'public-hostname'
  | 'public-ipv4'
  | 'public-keys/'
  | 'reservation-id'
  | 'security-groups'
  | 'services/'

export const getMetadataSync = (key: ec2MetadatKeys): string =>
  syncRequest('GET', url + key).getBody('utf8')

export const getMetadata = async (key: ec2MetadatKeys): Promise<string> => {
  const response = await got(url + key)
  return response.body
}
