import { FriendshipEntity } from 'src/entites/friendship.entity';
import { DataSource } from 'typeorm';

export const roleProviders = [
  {
    provide: 'FRIENDSHIP_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(FriendshipEntity),
    inject: ['DATA_SOURCE'],
  },
];
